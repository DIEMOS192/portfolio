# CV source

`Omar_Tarek_CV.docx` is the editable source for `public/Omar_Tarek_CV.pdf`.

Before this folder existed there was only the exported PDF, so every edit meant
rebuilding the layout from scratch. Edit the .docx, then export to PDF over the
top of `public/Omar_Tarek_CV.pdf` (Word: File > Export > Create PDF/XPS).

`build_cv.js` is the script that generated the .docx, kept so the layout can be
regenerated without Word. It needs the `docx` npm package:

```bash
node cv/build_cv.js cv/Omar_Tarek_CV.docx
```

Layout matches the original Word export: US Letter, 0.5" side margins, Calibri,
navy #1F3864 for the name, headings, rules and links, #1A1A1A body text,
#555555 italic for the summary line and the tech notes.
