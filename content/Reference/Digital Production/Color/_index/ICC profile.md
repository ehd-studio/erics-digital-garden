### Common ICC Profiles
- **sRGB (IEC61966-2.1):** The standard color space for web, digital cameras, and mobile devices.
    - _Use Case:_ Default for web images, social media, and photos intended for screen display.
- **Rec. 709-A**: recommended for Mac-based editing to ensure consistency
- **Rec. 709**: standard for general HDTV video.
- **Rec. 2020**: modern high-dynamic-range (HDR) work.
- **Adobe RGB (1998):** A wider color gamut than sRGB.
    - _Use Case:_ Professional photography intended for printing, capturing more vibrant greens and blues.

### Other Profiles
- **DCI-P3** : theatrical releases.
- **ProPhoto RGB / ROMM RGB:** An extremely large color gamut.
    - _Use Case:_ Archival storage of raw photo data and professional editing of high-dynamic-range images.
- **Gracol 2006 / 2013 (CMYK):** Standard for high-quality commercial offset printing.
    - _Use Case:_ Professional offset print, magazines, and marketing materials in North America.
- **SWOP 2006 / 2013 (CMYK):** Specifications for Web Offset Publications.
    - _Use Case:_ Magazine printing, catalog printing, and publishing.
- **FOGRA39 / FOGRA51 (CMYK):** European standard for commercial offset printing.
    - _Use Case:_ General commercial printing, brochures, and posters in Europe.
- **Generic Printer Profiles (e.g., Canon, Epson):** Manufacturer-provided profiles for specific paper and ink combinations.
    - _Use Case:_ Fine art printing, photo inkjet printing.
- **Display/Monitor Profiles (e.g., .icm, .icc):** Custom profiles created with calibration hardware (e.g., Spyder, i1Display).
    - _Use Case:_ Matching the color on your screen to your final printed output. 

### Specialized Profiles

- **XYZ Profiles:** Used as intermediate profiles for color conversion.
- **PRMG-based Profiles:** Profiles based on Perceptual Reference Medium Gamut, used for evaluating color exchange spaces.
- **Device Link Profiles:** Used for converting directly from one device space to another, such as converting from one CMYK standard to another. 

### Profile Types by Function

1. **Input Profiles:** Cameras and scanners.
2. **Display Profiles:** Monitors.
3. **Output Profiles:** Printers, presses.
4. **Working Space Profiles:** Creative software spaces like ProPhoto RGB. [[1](https://wiki.archlinux.org/title/ICC_profiles), [2](https://www.cambridgeincolour.com/forums/thread58112.htm), [3](https://smartpress.com/support/file-preparation/icc-profiles)]