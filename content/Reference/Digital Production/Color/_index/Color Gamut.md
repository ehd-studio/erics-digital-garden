A **color gamut** is the complete range of colors that a specific device—such as a monitor, camera, projector, or printer—can capture, produce, or reproduce. It defines the physical limits of color representation for that specific hardware, meaning a wider gamut allows for more vibrant, saturated, and accurate colors.
### How Color Gamuts Are Visualized
Gamuts are typically visualized on a two-dimensional chromaticity diagram, most commonly the CIE 1931 standard. This diagram maps all the colors visible to the human eye into a large, horseshoe-shaped area.

Within this visible spectrum, a specific device's color gamut is plotted as a triangle. The three points (vertices) of this triangle represent the device's primary colors: pure red, green, and blue. Every color that the device can possibly create by mixing those primaries falls inside the triangle. Any color falling outside of this triangle is considered **"out of gamut"** and is physically impossible for that device to display.

### Common Standards
To ensure colors look consistent across different devices, the industry relies on several standardized color gamuts:

- **sRGB / Rec. 709:** This is the universal standard for web content, everyday consumer displays, and high-definition television (HDTV). It covers about 35% of the visible color spectrum (roughly equivalent to 72% of the older NTSC standard). Because almost all devices support it, sRGB is the safest choice for ensuring your colors are viewed consistently on the internet.
- **Adobe RGB:** Created in 1998, this gamut is significantly wider than sRGB, particularly in the green and cyan/blue regions. It encompasses about 52% of the visible spectrum and is the preferred standard for professional photography and printing because it closely matches the CMYK color space used by commercial printers.
- **DCI-P3:** Originally developed for digital cinema projection, DCI-P3 offers about 25% to 30% more color space than sRGB. It is capable of producing much richer, more vibrant reds and yellows, making it the standard for High Dynamic Range (HDR) video, 4K TVs, and premium smartphones and monitors.
- **Rec. 2020 (BT.2020):** This is a massive, future-facing standard designed for 4K and 8K Ultra HD video. Covering over 75% of the visible spectrum, its primary colors are nearly monochromatic (pure light). Because it is so wide, current display technologies can only use Rec. 2020 as a target rather than fully achieving it.
- **NTSC:** Established in 1953 for analog television, this is largely a legacy standard today, though it is still occasionally used as a baseline to compare the size of newer gamuts.

### Gamut Mapping and Color Volume 
When you view content created in a wide gamut (like Adobe RGB) on a device with a narrower gamut (like an sRGB monitor), the system must perform **gamut mapping**. This process uses algorithms to translate "out-of-gamut" colors into the closest possible matches the destination device can handle, attempting to minimize visual distortions or harsh color clipping.

Furthermore, the rise of HDR technology has evolved the traditional 2D gamut into a 3D model known as **color volume**. Color volume adds _luminance_ (brightness) as a third dimension, measuring a display's ability to maintain rich, saturated colors even at extreme peak brightness levels without the colors washing out or turning white.