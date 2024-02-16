import Card from './Card/Card.js';
//import styles from "./styles.module.css";

export const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {characters.map(
        //   ({ id, name, status, gender, species, origin, image, onClick }) => (
        (item) => {
          return (
            <div >
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
                origin={item.origin.name}
                image={item.image}
                onClose={onClose}
                // {...item}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Cards;