from ultralytics import YOLO
import cv2
import os

def load_and_predict():
    # Load a pretrained YOLOv8 model
    # 'yolov8n.pt' is the nano version, fastest and smallest. 
    # Use 'yolov8x.pt' for better accuracy but slower speed.
    model = YOLO('yolov8n.pt')  

    # Define a source image (can be a local file or URL)
    # For demonstration, we'll check if a sample exists, otherwise use a placeholder
    sample_dir = os.path.join(os.path.dirname(__file__), 'samples')
    os.makedirs(sample_dir, exist_ok=True)
    
    # You can place a 'crime_scene.jpg' in 'backend/samples/' to test
    # Check for user upload first
    upload_path = os.path.join(sample_dir, 'user_upload.png')
    default_path = os.path.join(sample_dir, 'crime_scene.jpg')
    
    if os.path.exists(upload_path):
        source = upload_path
        output_name = 'result_user_upload.jpg'
        print(f"Processing uploaded image: {source}")
    else:
        source = default_path
        output_name = 'result_crime_scene.jpg'
        print(f"Processing default image: {source}")
    
    if not os.path.exists(source):
        print(f"No sample image found at {source}.")
        print("Please place an image named 'crime_scene.jpg' in the 'backend/samples/' folder.")
        # We can also use a URL for testing if the user agrees
        # source = 'https://ultralytics.com/images/bus.jpg' 
        return

    # Run inference
    results = model(source)

    # Process results
    for result in results:
        boxes = result.boxes  # Boxes object for bbox outputs
        masks = result.masks  # Masks object for segmentation masks outputs
        keypoints = result.keypoints  # Keypoints object for pose outputs
        probs = result.probs  # Probs object for classification outputs
        
        # Save results to disk
        result.save(filename=os.path.join(sample_dir, output_name))
        print(f"Detection saved to {os.path.join(sample_dir, output_name)}")

if __name__ == "__main__":
    load_and_predict()
