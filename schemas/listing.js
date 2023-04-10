export default {
  title: "Listing",
  name: "listing",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      options: { list: ['Necklaces', 'Bracelets', 'Earrings'] },
      validation: Rule => Rule.required(),
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      validation: Rule => Rule.required(),
    },
    {
      title: "Length (in inches)",
      name: "length",
      type: "number",
    },
    {
      title: "Width (in inches)",
      name: "width",
      type: "number",
    },
    {
      title: "Materials",
      name: "materials",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Color Options (if any)",
      name: "colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Photos",
      name: "photos",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: 'grid' },
      validation: Rule => Rule.required().min(1),
    },
  ]
};