import profiles from '../../../../profiles';
import { Twitter } from './Twitter';
import { LinkedIn } from './LinkedIn';
import { Github } from './Github';
import styles from './profile-anchor.module.css';

const linkSvgs = {
  twitter: Twitter,
  linkedIn: LinkedIn,
  github: Github,
};

function ProfileAnchor({ site, children, ...props }) {
  const Svg = linkSvgs[site];

  return (
    <a
      className={styles.profileAnchor}
      href={profiles[site]}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Svg />
    </a>
  );
}

function Profiles() {
  return (
    <>
      <ProfileAnchor site="twitter">twitter</ProfileAnchor>
      <ProfileAnchor site="linkedIn">linkedin</ProfileAnchor>
      <ProfileAnchor site="github">github</ProfileAnchor>
    </>
  );
}

export { Profiles };
