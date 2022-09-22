import styles from '../Style/Home.module.css';

const ToolkitIcon = ({ icon, name, familiarWith }) => {
  return (
    <div
      className={`${styles.toolCard} ${
        familiarWith && styles.familiarWith
      } stagger-in3`}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default ToolkitIcon;