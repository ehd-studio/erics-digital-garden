---
tags:
  - seed
---
Adobe scripting is a method of programmatically controlling and automating functions within Adobe applications, such as InDesign and Illustrator, by manipulating their Document Object Model (DOM). By transitioning from manual desktop publishing to a data-driven approach, scripting allows professionals to execute repetitive tasks at a massive scale, significantly saving time, boosting productivity, and reducing human error.

## Scripting Languages
Adobe provides several distinct extensibility frameworks to meet different development needs:
### [[Extend Script]]
Adobe's legacy JavaScript-based language (ECMAScript 3). It is highly effective for automating one-off tasks, batch processing, and directly accessing the application DOM.
### [[UXP]]
Unified Extensibility Platform is the modern, high-performance platform replacing ExtendScript and CEP. It runs on a modern V8 JavaScript engine and is the recommended path for building new, persistent panel UIs and modern plugins.
### [[CEP]]
 Common Extensibility Platform is an older HTML5-based framework used for rich, interactive user interfaces, which is currently being phased out in favor of UXP.
### [[C++ SDK]]
Used for creating native plugins that require deep system integration, performance-critical operations, or headless rendering via Adobe InDesign Server.

**Basic Use Cases** Scripting can be used to handle everything from simple file maintenance to enterprise-level document generation. Common use cases include:

- **Layout and Formatting Automation:** Scripts can automatically create text frames, apply paragraph and character styles, reset specific attributes, and add guides or crop marks around objects. Advanced scripts can even automatically reframe pages to fit their item bounds or arrange objects in complex layouts like grids and circles.
- **Data-Driven Publishing:** By utilizing XML, CSV files, or integrating with Product Information Management (PIM) systems, scripts can automatically populate hundreds of pages. This is commonly used for producing highly consistent product catalogs, price books, data sheets, and financial reports.
- **Image and Asset Management:** Scripting can automate the insertion and proportional resizing of images, place graphics into contact sheet layouts, rename linked files, and dynamically update out-of-date links.
- **Batch Processing and Housekeeping:** Developers use scripts for mass actions, such as batch-updating all Tables of Contents in a book, exporting all stories to separate text files, converting process RGB swatches to CMYK, or deleting unused layers, empty frames, and guides. Scripts can also automatically generate and insert barcodes or QR codes across documents.
- **Custom Tooling and UI:** Through extensions (a script packaged with a user interface), teams can build custom control panels. This allows designers and marketing managers to easily trigger complex logic—like formatting HTML or applying conditional styling—without needing to interact with the underlying code.
- **AI-Assisted Workflow:** Modern plugins (like MATE for InDesign) use UXP to connect the application to large language models. This allows users to type natural language prompts to instantly generate and execute scripts for tasks like spell-checking, text translation, or randomized object transformations.