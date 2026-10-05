- The **binary numeral system** is a base-2 positional number system that represents numerical values using only two digits: `0` and `1`.
- all information can be stored as bites of data
### Overview
- *Bites* is short form for Binary Digits
- A single binary digit is called a **bit**. 
- Bits are commonly grouped into 8-bit sequences called **bytes**
- Bytes are represented as (2^8 = 256) distinct combinations or values. 
- Other standard bit groupings
	- **nibbles** (4 bits)
	- **words** (16 bits)
	- **double words** (32 bits)
	- **quad words** (64 bits).
### Information as Binary
- **Hardware Implementation**: Modern digital electronic circuitry relies on binary because two-state physical implementations—such as high vs. low electrical voltages, on vs. off electronic switches, magnetic polarities on hard drives, or laser-read pits vs. lands on optical discs—are economical to build and offer high noise immunity.
- Color - pixels storing color values on an RGB scale of 255 (each channel is given 255 to 0 and represents what color is displayed)
- Sound - intensity and frequency of air compression stored as numbers that are then relayed to speakers for reproduction
- Text - letters and ligatures are stored as set values that are then converted when run through an encoding tool (UTF-8 is the most common example)

---
### Historical Background

Although binary principles were present in ancient cultural practices—such as ancient Egyptian multiplication and fractions, China's _I Ching_ hexagrams, Pingala's Sanskrit prosody matrix, West Africa's Ifá divination system, and Francis Bacon's bilateral cipher—the modern binary system was formally formulated by Gottfried Wilhelm Leibniz in the late 17th and early 18th centuries. In 1854, George Boole published his algebraic system of logic (**Boolean algebra**), which Claude Shannon later applied in 1937 to electrical switching circuits and relays, establishing the foundation for modern electronic digital computers.

---

### Primary Applications of Binary

1. **Hardware Memory & Computer Storage** Central processing units (CPUs), RAM, magnetic hard drives, solid-state storage, and optical media store and process instructions, file sizes, and memory capacities as sequences of bits, bytes, kilobytes (\(2^{10}\) bytes), megabytes (\(2^{20}\)), gigabytes (\(2^{30}\)), and terabytes (\(2^{40}\)).
2. **Text & Character Encoding** Binary sequences map to written characters using standard encodings. **ASCII** uses 7 bits to map 128 basic characters (such as assigning `01000001` to the letter 'A'). **Unicode** (such as **UTF-8**) uses 1 to 4 bytes per character to encode international scripts, historical characters, mathematical symbols, and emojis.
3. **Data Types & Multimedia Representation**
    - **Integers & Decimals**: Signed integers are represented in binary using systems like **two's complement**, while fractional real numbers use floating-point standards like **IEEE-754**.
    - **Images**: Digital images are divided into grids of **pixels**, where sets of bytes define color intensity values (e.g., Red, Green, and Blue channels).
    - **Audio & Video**: Continuous sound waves and video frames are sampled at discrete intervals, converted into binary numerical values, and stored to recreate sound and movement through speakers and displays.
4. **Bitwise Operations & Programming** In software development, programmers manipulate data directly at the bit level using bitwise operators: **AND** (`&`), **OR** (`|`), **XOR** (`^`), **NOT** (`~`), and **bit shifts** (`<<`, `>>`). Bitwise operations enable low-level tasks such as bit masking, flag manipulation, fast arithmetic (multiplying/dividing by powers of 2), and symmetric cryptography like XOR encryption.
5. **Error Detection and Correction** Data transmitted across noisy communication channels uses binary **linear block codes** (such as **Hamming codes**), which attach redundant parity check bits to messages so receivers can detect and correct bit errors without retransmission.