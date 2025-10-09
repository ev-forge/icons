# Contributing to ev-icon-library

Thank you for your interest in contributing! We appreciate all community contributions, from bug reports to new icons.

- **[Code of Conduct](./CODE_OF_CONDUCT.md):** By participating, you agree to uphold our code of conduct.
- **[Existing Issues](https://github.com/ev-forge/ev-icon-library/issues):** Please search for existing issues before opening a new one.

---

## 💡 Proposing Changes

- **Bug Reports:** Use the "Bug Report" template to report issues.
- **Feature/Icon Requests (RFC):** Use the "Feature Request (RFC)" template to propose new ideas. **Please await maintainer approval** before starting implementation. Pull Requests for unapproved features will not be accepted.

---

## 🚀 Local Development

This project is a `pnpm` monorepo.

1.  **Fork & Clone** the repository.
2.  **Install Dependencies** from the root directory:
    ```bash
    pnpm install
    ```
3.  **Run Dev Servers** in separate terminals (from the root):

    ```bash
    # For the icon library
    pnpm dev:lib

    # For the docs site
    pnpm dev:doc
    ```

---

## ✨ Contributing Icons

If you are contributing a new icon (after your RFC was approved):

1.  Add your new `.svg` file to the appropriate category in `packages/icon-library/src/assets/community`.
2.  **Regenerate the icon metadata.** This is a critical step. Run the following command from the **root directory**:
    ```bash
    pnpm icons:generate
    ```
    This command updates the necessary type definitions and asset manifests for both the library and the docs site.

---

## ✅ Submitting a Pull Request

1.  Create your branch from `main`.
2.  Make your changes.
3.  **Ensure all checks pass** before submitting: `pnpm lint` and `pnpm test`.
4.  Commit your work and open a Pull Request.
5.  In your PR description, please **link to the approved issue** it resolves.
