from ultralytics import YOLO
import os

# Configuration
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_YAML = os.path.join(BASE_DIR, 'dataset', 'data.yaml')
PROJECT_DIR = os.path.join(BASE_DIR, 'runs', 'detect')
RUN_NAME = 'weapon_detection_finetune'

def main():
    # Load a model
    model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)

    # Train the model
    # We use absolute path for data.yaml which was created by the conversion script
    print(f"Starting training with dataset: {DATASET_YAML}")
    
    results = model.train(
        data=DATASET_YAML,
        epochs=3,  # Reduced to 3 for quick demonstration
        imgsz=416,  # Reduced image size for speed
        project=PROJECT_DIR,
        name=RUN_NAME,
        batch=16,
        exist_ok=True # Overwrite existing experiment
    )
    
    print("Training completed.")
    print(f"Best model saved at: {os.path.join(PROJECT_DIR, RUN_NAME, 'weights', 'best.pt')}")

if __name__ == '__main__':
    main()
