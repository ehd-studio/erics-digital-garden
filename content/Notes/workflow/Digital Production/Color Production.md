---
tags:
  - bud
---
I wanted to investigate a better workflow for thinking about color when approaching video production. I've made it a necessity that projects take into account color during pre production ideation, on production in cam, and afterward during editing. I want to map the process here to help ideate better ways to build color workflow more intently into project process.

---
## Pre-production
Ideating the color palette in pre-production is primarily concerned with establishing a foundation of a video's emotional resonance with the way it "looks". While there are other facets (cut speed, angles, VFX, etc.), color here is an establishing feature that will touch all other parts. These other areas can be addressed in the [[Storyboard]]. Color palette should be established *after* a script/general outline has been established. 

### 1. Pitch Considerations for Palette Ideation
After reading the outline/script, write down some initial thoughts. Based on these thoughts, write out some initial color ideas based on this set of criteria:

1. *Heart of the Story*: Pull tonality from the pages of the script or outline. This ideation should focus on how color tones and character can inform the specific emotions you want to illicit. Begin by having these adjectives at your disposal before looking around for inspiration.
2. *[[Color Psychology]]*: Different hues will evoke certain emotions. For example, red can signal passion or danger while blue can represent calmness or detachment. 
3. *Genre and Atmosphere*: Genre specific expectations of a project can dictate what palettes you may want to use. More vivid, horror-based concepts may call for high contrast reds and eerie greens. Romantic scripts may benefit from warmer pinks and golds. 
4. *Color Harmony*: The proposed schemes will work better when they are balanced. Use a color wheel to set up your schemes to compliment the colors you've chosen:
	   - *monochromatic*: soothing
	   - *complementary*: high-contrast drama
	   - *analogous*: harmony
5. *Cultural Context*: Certain colors may be associated with unintended negative messaging. Be sure messaging includes any historical context as to why these colors make sense for the script or subject matter.

### 2. Color Inspiration Buckets
Color inspiration can come from anywhere. Based on the story, its a good idea to integrate color sources that can stand in harmony with the subject or tone. Double check the [[Imagery Tools]] repository for some sources and create a mood board purely for color picked from *varied* sources. That could include, photography, Historical references, artwork, textures, writing, etc. Compile what you find into a folder or a spread (Figma or Illustrator works) to be viewed as a reminder of tone down the road. 

### 3. Pitch Deck
The keys for the palette pitch is to nail how this color profile fits *visually and narratively* to the overall pitch. Color will play an integral role in the [[Video Look Book]] document, but here are the main parts using color research:

#### I. Fundamental Project Information
An effective look book begins by grounding the visual style in the story’s context. This section provides the narrative buy in for potential investors and team members.
- **Basic Info:** Include the project title, a concise log line, and a full synopsis.
- **Character Descriptions:** Outline the protagonist's journey and how their wardrobe or world might evolve visually.
- **Introduction Page:** A summary slide that defines the overarching theme of the look book.
#### II. Visual References and Inspiration
The primary purpose of the look book is to "show off" the project's aesthetic through a curated catalog of work. Organize images in an engaging way, typically featuring 3–9 images per page across a total of 4–6 slides.
- **Reference Stills:** Use movie stills you've saved. You can also pull from a professional database found in the [[Imagery Tools]] page.
- **Mixed Media Inspiration:** Include photography, paintings, or any other mediums that can convey the vibe.
##### III. The Color Palette
Clearly defined color palettes help inform decisions for prop, outfit, and set design. Include specific swatches with Hex Codes, Color Harmonies (stated above), and some notes on why colors are being used for context.
- **Color Scripts**: Animators use color scripts to map emotional arcs through colorful sketches and maintain the mood throughout the animation process. While note necessary, mapping your color over more long form content where visual/emotional atmosphere changes can prove useful for keeping everyone aware of what each section of the script entails for color and mood.
##### IV. Lighting and Composition
Sharing an intended lighting setup to help production teams with ideation/rentals.
- **Lighting Quality:** Use samples to show the desired **color temperature** (warm vs. cool), shadow harshness, and the use of practical lighting vs. natural sources.
- **Compositional Techniques:** Define your visual scale, including framing choices like symmetry or the quadrant system.
- **Visual Motifs:** Include references for elements that might interrupt or layer the image, such as reflections on glass or double images.

Be sure to reference the color and adjectives you've chosen to pursue throughout each of these sections.


This is what you're *Color* folder should be structured like in your Project Drive:
```
- [2.Assets]
	- [Color]
		- [Notes]
			- Script personal description
			- Script personal mind map
			- [Moodboard]
				- Figma/Illustrator File
				- [Images]
					  - Image Files
			- [Rough Draft]
				- Palette 1
				- Palette 2..
		- [Working]
			- Visual Reference - final pitch deck page
			- Color Palette
			- Color Script (if applciable)
```


---
## Production
On set color is primarily concerned with executing the vision outlined in the production look book and technical logging for editing pass off.
### On Set Capture
You should have your settings pre planned with your cinematographer *before* showing up on set. With preplanning you should go over a couple of things including:
1. **Lighting/Art Direction**: Getting on the same page by going over/sharing documents showing tonality inspiration.
2. **Capture Settings**
	1. **Aspect Ratio**: Across what formats are you intending to export the project at (social only, YouTube, Television)?
	2. **Footage Format**: Each format will allow (or disallow) for certain color and image adjustments to be applied. Become aquainted with whatever format is available and what adjustments in your workflow will need to be applied.
		- **Uncompressed raw** is a MASSIVE data file, but allows for the most flexibility in edit. Not recommended for the edit. ARRI RAW is an example.
		- **Compressed raw** is exactly how it sounds, a compressed version of the raw file. Double check Video [[Codecs]] for specifications on how file metadata tagging works for color.
		- **Color Space Codec** compresses data to save space while losing color editing ability.
3. **Calibrations**: If you plan to use In-Cam Reference points like an on set monitor, you will need to specify a reference white point so that the background and subject lighting are accurately represented and consistent. A **reference white point/balance** is a set of chromaticity coordinates used to determine the color 'white' in image capture, encoding or display.

### Post Production Handoff
The start of the post production color workflow begins with tagging. Cameras will usually provide you a lot of great data that will play into your sorting such as Camera make, Exposure Settings and Scene Descriptions. For color tagging, you are concerned with **Input Color Space** on clips. This is the [[Color Profiles]] and [[Gamma]] values on the original clip and is crucial for transferring Log/RAW footage into a workspace like your [[DaVinci Resolve Workflow]].

---
## Post Production Workflow
Its important to sustain a color management pipeline which can intake your original intent across different monitors and delivery formats.
#### Hardware Calibration
Before beginning grading, check your display as it should be calibrated to the settings you used. **Colorimeters** can help to match standards if needed.

https://www.youtube.com/watch?v=60_X5F3eltY&t=6s
#### Working Color Space

**LOG and LUTs**
[[Codecs]]?
#### Tone Mapping and Gamut Compression
#### Outputs 
**Output Color Space**
The final file must be exported with the correct [[NCLC Tags|NCLC Tags]] to accurately display color primaries and gamma.