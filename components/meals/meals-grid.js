import styles from './meals-grid.module.css';

export const MealsGrid = ({meals}) => {
  return (
    <ul className={styles.meals}>
        {meals.map(meal => (
            <li key={meal.id}>{meal.name}</li>
        ))}
    </ul>
  )
}
