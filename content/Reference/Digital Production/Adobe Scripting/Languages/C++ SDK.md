The **C++ SDK** is an extensibility framework that provides the deepest level of access to Adobe InDesign by allowing developers to build native plugins. Unlike interpreted languages such as ExtendScript or UXP, C++ plugins are natively compiled, which delivers the fastest possible performance with zero scripting overhead. Because of its complexity, it requires expert-level development skills and plugins must be individually compiled for specific operating systems and major InDesign releases.

The primary use cases for the C++ SDK include:

- **Deep System Integration:** It offers complete control over the layout engine, document structure, stories, and rendering.
- **Custom Tools:** Developers can use the SDK to create brand-new tools that physically appear within the native InDesign toolbox.
- **Custom File Formats:** It is the necessary framework for adding support to import or export entirely new file formats.
- **InDesign Server and Headless Workflows:** Because it processes documents at native speeds, it is the ideal choice for performance-critical, large-batch document processing on InDesign Server, where saving milliseconds per document matters across massive automated publishing pipelines.
- **Real-Time Event Handling:** The SDK can hook directly into the application's notifier system, allowing plugins to respond to application events in real time.

In practice, the C++ SDK is often combined with other technologies. A common full-stack architecture uses a **C++ plugin as the core processing engine** to handle the heavy computation, while relying on a modern UXP panel to serve as the user-facing interface.