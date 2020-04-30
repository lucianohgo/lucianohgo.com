import ProfileAnchor from '../ProfileAnchor';

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <ProfileAnchor site="twitter">twitter</ProfileAnchor> /{' '}
      <ProfileAnchor site="github">github</ProfileAnchor> /{' '}
      <ProfileAnchor site="stackOverflow">stack overflow</ProfileAnchor> /{' '}
      <ProfileAnchor site="linkedIn">linkedin</ProfileAnchor>
    </footer>
  );
}
