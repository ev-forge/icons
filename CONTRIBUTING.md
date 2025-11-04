# Contributing to @ev-forge/icons

Thank you for your interest in contributing! We appreciate all community contributions, from bug reports to new icons.

- **[Code of Conduct](./CODE_OF_CONDUCT.md):** By participating, you agree to uphold our code of conduct.
- **[Existing Issues](https://github.com/ev-forge/@ev-forge/icons/issues):** Please search for existing issues before opening a new one.

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

1. Design you icon on 512px x 512px without paddings, then you need to simplify it to reduce size, you can use this tool: https://jakearchibald.github.io/svgomg/, then make sure you have this properties in the svg:

   - `viewBox="0 0 512 512"` ensure it is a square
   - `width="1em"` and `height="1em"` inherit the font size
   - `fill="currentColor"` inherit the text color, then remove the colors property on the `path` tags to inherit from `svg`

2. Add your new `.svg` file to the appropriate category in `packages/icons/src/assets/community`.
3. **Regenerate the icon metadata.** This is a critical step. Run the following command from the **root directory**:
   ```bash
   pnpm icons:generate
   ```
   This command updates the necessary type definitions and asset manifests for both the library and the docs site.

### 📜 Golden Rules for Creating Optimized SVG Icons

#### Rule 1: Minimize Anchor Points

- What (For Designers): Use the absolute minimum number of vector points needed to define a shape. Every point should be essential.
- Why (For Developers): Fewer points create a shorter d attribute string in the <path> element, directly reducing file size.

#### Rule 2: Snap to the Pixel Grid

- What (For Designers): Align all anchor points to whole-number coordinates (e.g., X:10, Y:25). Avoid fractional values.
- Why (For Developers): Integer coordinates are highly resistant to compression. This allows for aggressive decimal precision reduction during optimization without causing visual distortion.

#### Rule 3: Unify into a Single Shape

- What (For Designers): For any solid, single-color icon, select all its individual parts and use the "Union Selection" (or equivalent boolean operation) to merge them into one single shape before exporting.
- Why (For Developers): This produces a single, robust <path> element. It ensures the icon’s geometry (including cutouts) remains locked together during optimization, preventing parts from shifting and resulting in the smallest possible file.

#### Rule 4: Build Outlines, Don't Use Stroke

- What (For Designers): To create an outline ("regular") icon, build it as a closed shape with a hole inside (a compound path). Do not simply apply a stroke property to a line.
- Why (For Developers): Icons should not rely on the stroke property for their appearance. A filled compound path (using fill-rule) guarantees consistent rendering and avoids issues with stroke scaling.

#### Rule 5: Build Effects Manually

- What (For Designers): Avoid using built-in layer effects like "Drop Shadow." Instead, create these effects by hand using solid shapes with varying opacities.
- Why (For Developers): Design tool effects are exported as multiple, complex, and often rasterized SVG elements. Manually built effects export as clean <path>s, leading to smaller, more predictable files.

#### Rule 6: Always Convert Text to Outlines

- What (For Designers): For any text within an icon, always convert it to vector shapes ("Create Outlines") before exporting.
- Why (For Developers): This removes external font dependencies, making the icon a self-contained asset. It guarantees the icon will render identically everywhere, regardless of available system or web fonts.

---

## ✅ Submitting a Pull Request

1.  Create your branch from `main`.
2.  Make your changes.
3.  **Ensure all checks pass** before submitting: `pnpm lint` and `pnpm test`.
4.  Commit your work and open a Pull Request.
5.  In your PR description, please **link to the approved issue** it resolves.
