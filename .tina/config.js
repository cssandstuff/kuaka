import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch: "master",
  clientId: "b0cbd30d-c318-480b-ae05-b45d562d7b0f", // Get this from tina.io
  token: "1119a786bc854f860520aad43e2e50ffda483c89", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content",
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'SEO Title',
            name: 'seotitle',
          },
          {
            type: 'string',
            label: 'Background',
            name: 'bg',
            ui: {
              component: 'image',
            },
          },
          {
            type: "rich-text",
            name: "body",
            templates: [
              {
                name: 'figure',
                label: 'Polaroid-like Image',
                match: {
                  start: '{{<',
                  end: '>}}',
                },
                fields: [
                  {
                    name: 'src',
                    label: 'source',
                    type: 'string',
                    required: true,
                    ui: {
                      component: 'image',
                    },
                  },
                  {
                    name: 'class',
                    label: 'style name (keep as polaroid)',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'title',
                    label: 'Title',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'caption',
                    label: 'Caption',
                    type: 'string',
                    required: true,
                  },
                ],
              },
            ],
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
