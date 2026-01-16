import requests
import zipfile
import io
import os

def download_and_extract(url, extract_to):
    print(f"Downloading from {url}...")
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        print("Download complete. Extracting...")
        with zipfile.ZipFile(io.BytesIO(response.content)) as z:
            z.extractall(extract_to)
        print(f"Extracted to {extract_to}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

def main():
    # Direct links to the WeaponS dataset (University of Granada)
    # Source: https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/WeaponsDetection/BasesDeDatos/WeaponS.zip
    
    base_dir = os.path.join(os.getcwd(), 'backend', 'dataset')
    os.makedirs(base_dir, exist_ok=True)
    
    # URL for images
    images_url = "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/WeaponsDetection/BasesDeDatos/WeaponS.zip"
    download_and_extract(images_url, base_dir)
    
    # URL for annotations (XML format usually, but useful to have)
    annotations_url = "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/WeaponsDetection/BasesDeDatos/WeaponS_bbox.zip"
    download_and_extract(annotations_url, base_dir)

    print("\nDataset acquisition complete.")
    print(f"Images are located in: {os.path.join(base_dir, 'WeaponS')}")

if __name__ == "__main__":
    main()
