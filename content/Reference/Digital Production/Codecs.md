A **codec** (or code decoder) is a tool or algorithm that encodes digital media files for storage or transmission and then decodes them for playback or editing. Its primary purpose is to compress raw audio, video, or image data into a smaller, more manageable size, making it easier to share and store content across various devices.
Codecs operate through two main processes:
- **Encoding (Compression):** The codec takes raw media data and applies mathematical algorithms to "shrink" it into a stream of bytes.
- **Decoding (Decompression):** When the media needs to be used, the codec reverses the process, decompressing the file into a format *nearly* as good as the original for playback.
### Compression Techniques
The processes of encoding or compression has its own variants. Most codecs use one of two primary methods to reduce file size:
- **Transformative Compression:** This method uses mathematical techniques to break data into smaller pieces to find hidden patterns and repeated elements (e.g., JPEG or Motion JPEG).
- **Predictive Compression:** This technique compares consecutive frames and encodes only the **changes** between them rather than storing every complete frame (e.g., HEVC/H.265).
### Key Classifications
There are two key facets to consider when approaching codecs and compressing/decompression your files:
- **Lossy vs. Lossless:**
	- **Lossy** codecs (like H.264 or MP3) discard details that human senses are unlikely to notice to achieve very small file sizes, though some quality is sacrificed. 
	- **Lossless** codecs (like Apple ProRes or FLAC) preserve all original data, allowing the file to be recreated exactly as it was, which is essential for professional editing and archiving.
- **Hardware vs. Software:** 
	- **Software-based** codecs rely on the computer's CPU, offering flexibility but requiring significant processing power. 
	- **Hardware-accelerated** codecs use specialized units like GPUs or ASICs to handle encoding and decoding more efficiently with lower power consumption.

### Codec vs. Container
It is important to distinguish a codec from a **container** (often identified by file extensions like .mp4 or .mov). Using a bookshelf analogy, the **container is the bookshelf** that holds different tracks of audio and video, while the **codec is the author** that determines the "language" (compression scheme) used to write the books.

---
## Codec Types
### 1. H.264 / AVC (Advanced Video Coding)
- Most effectively universal format
- **Universal Compatibility** that is supported on almost every platform, mobile device, web browser and hardware decoder.
- Versatile to be used across low-bitrate to higher fidelity formats
- Supports resolutions up to 8K UHD
- Block oriented, motion-compensated coding standard

### 2. HEVC / H.265 (High Efficiency Video Coding)
- Successor to the H.264 that offers 25% to 50% better data compression at the same quality level.
- Standard for 4K to 8K content
- Requires higher processing power to encode with less impact on decompression.
### 3. AV1 (AOMedia Video 1)
- Royalty free codec developed by Alliance for Open Media
- Better compression efficiency than VP9 and HEVC
- High encoding cost and less adoption
### 4. VP9
- Another royalty free alternative to HEVC developed by Google
- *Heavily* used by platforms like Youtube for playback speed.
- Adjusts compression based on available bandwidth to ensure smooth playback on slower connections
### 5. VVC (Versatile Video Coding)
- 30-50% better compression than HEVC for the same quality
- Extreme complexity when compared to HEVC

---
### Post Production Codecs
### 1. Apple ProRes
- Lossy intra-frame codec designed for easier processing during edit.
- Native to Final Cut Pro.
- Used widely on high-end mastering.
### 2. Avid DNxHR
- Avid equivalent to ProRes.
- Platform flexibility working well across Windows, Mac and Linux.
- Industry standard for big films and broadcast television.

---
## Video Codecs
Designed to capture/preserve original sensor data as best as possible and create flexibility for the edit. These formats allow for non-destructive adjustments like white balance and ISO after footage is recorded.
### 1. REDCODE RAW
- **Lossy** (Turntable)
- **Hardware** (In Cam)
- Designed to manage the massive detail of 8K imagery while maintaining manageable file sizes.
- Offers tunable file sizes, allowing shooters to choose between higher image fidelity or lower storage requirements depending on the project's needs.
Edit Workflow
- **Non-Destructive Workflow:** REDCODE RAW uses a purely metadata-driven approach where all grading and look adjustments are stored as instructions.
- **Reversibility:** Parameters such as ISO, White Balance, and Color Space are not "baked into" the file; you can reset them to the original camera settings or change them completely in post-production with zero loss in quality.
- **RED Sidecar Files:** Adjustments can be saved in small metadata sidecar files (.RMD), allowing multiple looks to be applied to the same raw file without creating new video files.
### 2. ARRIRAW
- **Lossless** (Uncompressed)
- **Hardware** (In Camera)
- ARRI's format for uncompressed and unencrypted sensor data
- Fully retains the sensor's natural color response and exposure latitude through uncompressed data.
- Requires compute-intensive **debayering** (color reconstruction) algorithm to calculate missing color components for each pixel.
- Saves every frame as separate file
- Can be recorded as **MXF/ARRIRAW** that wraps data into single file container.
Editing Workflow
- - **The Digital Negative:** Because ARRIRAW is uncompressed and unprocessed, it relys heavily on metadata to guide the debayering (color reconstruction) algorithm in post-production.
- **Sensor-Level Precision:** The metadata provides the exact color response and exposure latitude of the sensor, allowing the post-production team to replicate the look intended by the cinematographer while retaining the full dynamic range of the original capture.
### 3. Blackmagic RAW (BRAW)
- **Lossy** (Visually Lossless)
- **Hardware** (De-Mosaic)
- Moves part of the de-mosaic process into the camera hardware, allowing for much faster decoding and playback on standard computers compared to traditional RAW formats.
- Two distinct encoding styles:
    - **Constant Bitrate:** Offers variations (5:1, 8:1, 12:1, 18:1) that provide predictable file sizes based on the unprocessed sensor data.
    - **Constant Quality:** Uses variable bitrate (Q0, Q1, Q3, Q5) to ensure quality never suffers, removing upper data limits for complex frames.
- Encodes images in a custom non-linear 12-bit space for maximum dynamic range.
Edit Workflow
- **Embedded and Sidecar Metadata:** BRAW files contain embedded metadata including lens info, iris, and shutter settings. During post, software like DaVinci Resolve uses this metadata to provide control over 12-bit non-linear adjustments. If you make changes, they can be saved to a `.sidecar` file so the original file remains untouched.
- **Generation 5 Color Science:** The format specifically handles metadata for its **Generation 5 Color Science**, ensuring consistent color reproduction across different camera sensors.
### 4. Apple ProRes RAW
- **Lossy** (Visually Lossless)
- **Software and Hardware**
Editing
- **NLE Integration:** ProRes RAW metadata is designed for tight integration with Final Cut Pro and other compatible non-linear editors (NLEs).
- **Real-Time Metadata Support:** It allows for the adjustment of **ISO, Exposure Offset, and White Balance** directly in the inspector window. Because it is optimized for multicore and hardware-accelerated processing, these metadata-based changes can often be viewed in real-time without rendering.