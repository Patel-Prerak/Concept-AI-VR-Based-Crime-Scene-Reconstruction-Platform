from ultralytics import YOLO
import os
import glob

# Configuration
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Path to the fine-tuned model weights
# Note: 'runs' is usually created in the CWD (backend) if run from there, or project root if run from there.
# Our train_yolo.py set project=PROJECT_DIR which is backend/runs/detect
MODEL_PATH = os.path.join(BASE_DIR, 'runs', 'detect', 'weapon_detection_finetune', 'weights', 'best.pt')
SAMPLES_DIR = os.path.join(BASE_DIR, 'samples')
OUTPUT_IMAGE = os.path.join(BASE_DIR, 'result_finetuned.jpg')

def main():
    if not os.path.exists(MODEL_PATH):
        print(f"Error: Model not found at {MODEL_PATH}")
        print("Please ensure training is complete.")
        return

    print(f"Loading fine-tuned model from: {MODEL_PATH}")
    model = YOLO(MODEL_PATH)

    # Find user upload
    image_extensions = ['*.png', '*.jpg', '*.jpeg']
    image_files = []
    for ext in image_extensions:
        image_files.extend(glob.glob(os.path.join(SAMPLES_DIR, ext)))
    
    # Priority: user_upload.*, then others
    target_image = None
    for img in image_files:
        if 'user_upload' in os.path.basename(img):
            target_image = img
            break
    
    if not target_image and image_files:
        target_image = image_files[0]
        
    if not target_image:
        print("No images found in samples directory.")
        return

    print(f"Running inference on: {target_image}")
    
    # Run inference
    results = model.predict(target_image, conf=0.25) # slightly lower conf to ensure we catch things
    
    # Visualize
    for result in results:
        result.save(filename=OUTPUT_IMAGE)
        print(f"Result saved to {OUTPUT_IMAGE}")
        # Print detected classes
        for box in result.boxes:
            cls_id = int(box.cls[0])
            conf = float(box.conf[0])
            cls_name = model.names[cls_id]
            print(f"Detected: {cls_name} with confidence {conf:.2f}")

if __name__ == '__main__':
    main()
