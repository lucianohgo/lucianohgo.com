export default function Picture({ file, srcWebp, srcJpg, imgProps, ...props }) {
  const webp = srcWebp || `/images/${file}.webp`;
  const jpg = srcJpg || `/images/${file}.jpg`;

  return (
    <picture {...props}>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={jpg} type="image/jpeg" />
      <img src={jpg} {...imgProps} />
    </picture>
  );
}
