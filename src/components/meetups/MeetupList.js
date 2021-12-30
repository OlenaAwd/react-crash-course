import MeetupItem from "./MeetupItem";
import css from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={css.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          //   meetup={meetup}
        />
      ))}
    </ul>
  );
}
