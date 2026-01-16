import os
import xml.etree.ElementTree as ET
import shutil
import random
import yaml

# Configuration
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_ROOT = os.path.join(BASE_DIR, 'dataset')
IMAGES_SOURCE_DIR = os.path.join(DATASET_ROOT, 'WeaponS')
XML_SOURCE_DIR = os.path.join(DATASET_ROOT, 'WeaponS_bbox')
OUTPUT_DIR = os.path.join(DATASET_ROOT, 'yolo_data')

CLASSES = ['pistol']  # We define 'pistol' as class 0. Add 'knife' if found later/needed.

def convert(size, box):
    dw = 1./size[0]
    dh = 1./size[1]
    x = (box[0] + box[1])/2.0
    y = (box[2] + box[3])/2.0
    w = box[1] - box[0]
    h = box[3] - box[2]
    x = x*dw
    w = w*dw
    y = y*dh
    h = h*dh
    return (x, y, w, h)

def setup_directories():
    if os.path.exists(OUTPUT_DIR):
        shutil.rmtree(OUTPUT_DIR)
    
    for split in ['train', 'val']:
        os.makedirs(os.path.join(OUTPUT_DIR, 'images', split), exist_ok=True)
        os.makedirs(os.path.join(OUTPUT_DIR, 'labels', split), exist_ok=True)

def process_file(filename, split):
    xml_path = os.path.join(XML_SOURCE_DIR, filename)
    tree = ET.parse(xml_path)
    root = tree.getroot()
    
    # Check if file contains relevant classes
    has_target_class = False
    for obj in root.iter('object'):
        cls = obj.find('name').text
        if cls in CLASSES:
            has_target_class = True
            break
            
    if not has_target_class:
        return False

    # Get image dimensions
    size = root.find('size')
    w = int(size.find('width').text)
    h = int(size.find('height').text)

    # Output label file
    file_id = os.path.splitext(filename)[0]
    label_path = os.path.join(OUTPUT_DIR, 'labels', split, file_id + '.txt')
    
    with open(label_path, 'w') as out_file:
        for obj in root.iter('object'):
            difficult = obj.find('difficult').text
            cls = obj.find('name').text
            if cls not in CLASSES or int(difficult) == 1:
                continue
            cls_id = CLASSES.index(cls)
            xmlbox = obj.find('bndbox')
            b = (float(xmlbox.find('xmin').text), float(xmlbox.find('xmax').text), float(xmlbox.find('ymin').text), float(xmlbox.find('ymax').text))
            bb = convert((w, h), b)
            out_file.write(f"{cls_id} {bb[0]} {bb[1]} {bb[2]} {bb[3]}\n")

    # Copy Image
    # Image name might be jpg or png, usually jpg in this dataset
    image_filename = file_id + '.jpg'
    src_image_path = os.path.join(IMAGES_SOURCE_DIR, image_filename)
    if not os.path.exists(src_image_path):
        # Try png
        image_filename = file_id + '.png'
        src_image_path = os.path.join(IMAGES_SOURCE_DIR, image_filename)
    
    if os.path.exists(src_image_path):
        dst_image_path = os.path.join(OUTPUT_DIR, 'images', split, image_filename)
        shutil.copy(src_image_path, dst_image_path)
    else:
        print(f"Warning: Image for {filename} not found.")
        return False
        
    return True

def create_yaml():
    yaml_content = {
        'path': OUTPUT_DIR,
        'train': 'images/train',
        'val': 'images/val',
        'names': {i: name for i, name in enumerate(CLASSES)}
    }
    
    yaml_path = os.path.join(DATASET_ROOT, 'data.yaml')
    with open(yaml_path, 'w') as f:
        yaml.dump(yaml_content, f, default_flow_style=False)
    print(f"Created data.yaml at {yaml_path}")

def main():
    setup_directories()
    
    xml_files = [f for f in os.listdir(XML_SOURCE_DIR) if f.endswith('.xml')]
    random.seed(42)
    random.shuffle(xml_files)
    
    split_idx = int(len(xml_files) * 0.8)
    train_files = xml_files[:split_idx]
    val_files = xml_files[split_idx:]
    
    print(f"Total XML files: {len(xml_files)}")
    print(f"Training files: {len(train_files)}")
    print(f"Validation files: {len(val_files)}")
    
    count = 0
    for f in train_files:
        if process_file(f, 'train'):
            count += 1
            
    for f in val_files:
        if process_file(f, 'val'):
            count += 1
            
    print(f"Processed {count} valid files successfully.")
    create_yaml()

if __name__ == '__main__':
    main()
