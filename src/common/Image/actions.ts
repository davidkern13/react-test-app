export const getImageSrcSet = (baseUrl: string) => `
  ${baseUrl}/small 200w,
  ${baseUrl}/medium 350w,
  ${baseUrl}/large 500w
`;

export const getImageSizes = () => `
  (max-width: 400px) 200px, 
  (max-width: 700px) 350px, 
  500px
`;
