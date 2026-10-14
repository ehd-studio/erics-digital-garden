Shell configuration files—often referred to as **"startup files"** or **"dot files"** because their names typically begin with a period (like `.bashrc`)—are files containing shell commands that execute automatically when a shell environment starts.

These files are used to configure and customize your terminal environment. The most common things stored in shell configuration files include:

- **Aliases:** Custom shortcuts for longer commands (e.g., changing `ls -l` to just `ll`).
- **Environment Variables:** System-wide settings such as your execution `PATH` (which tells the system where to look for programs) or `MANPATH`.
- **Custom Functions:** Complex, customized command sequences.
- **Shell Prompts:** Customizations to change the visual appearance of the command-line prompt.

### Which File Gets Executed?

Which configuration file is loaded depends entirely on the type of shell you are using (like Bash, Zsh, or tcsh) and the specific way the shell is invoked:

**1. Interactive Login Shells** These are shells opened when you authenticate into a system, such as connecting via SSH, logging into a physical console, or running a shell with a `--login` flag.

- They typically start by reading system-wide settings from `/etc/profile`.
- Then, they look for and execute user-specific configuration files such as **`~/.bash_profile`**, **`~/.bash_login`**, or **`~/.profile`** (for Bash), or **`~/.zprofile`** (for Zsh).

**2. Interactive Non-Login Shells** These are shells opened when you are already logged in and simply open a new terminal window or tab.

- These shells usually skip the system-wide profiles and directly execute files like **`~/.bashrc`** (for Bash) or **`~/.zshrc`** (for Zsh).

**3. Non-Interactive Shells** When you run automated scripts, the system opens a non-interactive shell. To increase efficiency and prevent configuration issues, these shells generally do not load system profiles or `.bashrc` files unless explicitly instructed to do so.

### Important Quirks and Best Practices

- **Sourcing Files:** Because users generally want the same aliases and variables available regardless of how they opened their terminal, it is a standard practice to configure `.bash_profile` (the login file) to explicitly load or "source" `.bashrc` (the non-login file).
- **macOS Exception:** Unlike most Linux distributions, macOS treats every new Terminal window or tab as an _interactive login shell_. This means macOS will default to reading `.bash_profile` or `.zprofile` every time you open a new window, bypassing `.bashrc` entirely unless you have configured it to source it.
- **Formatting:** If you ever edit these configuration files, it is crucial that your text editor is set to save them with standard "Unix" end-of-line characters; otherwise, the shell will fail to read them properly.