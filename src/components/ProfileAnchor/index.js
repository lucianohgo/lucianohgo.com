import profiles from '../../profiles';

export default function ProfileAnchor({ site, children, ...props }) {
  return (
    <a
      href={profiles[site]}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
