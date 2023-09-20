import styles from './GameBoard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { infoActions } from '../../store'

export const GameBoard = () => {
    const rulesActive =  useSelector(state => state.info.isActive)
    const dispatch = useDispatch()

    const showRulesHandler = () => {
        dispatch(infoActions.activeState())

    }

	return (
		<main className={styles['game-board']}>
			<div className={styles.triangle}>
				<button className={`${styles['paper-box']} ${styles.box}`}>
					<div className={`${styles['gradient-box']} ${styles['gradient-paper']}`}>
						<div className={`${styles.paper} ${styles.icon}`}></div>
					</div>
				</button>
				<button className={`${styles['scissors-box']} ${styles.box}`}>
					<div className={`${styles['gradient-box']} ${styles['gradient-scissors']}`}>
						<div className={`${styles.scissors} ${styles.icon}`}></div>
					</div>
				</button>
                <button className={`${styles['rock-box']} ${styles.box}`}>
					<div className={`${styles['gradient-box']} ${styles['gradient-rock']}`}>
						<div className={`${styles.rock} ${styles.icon}`}></div>
					</div>
				</button>
			</div>
            <div className={styles.reset}>
                <button onClick={showRulesHandler}>Rules</button>
            </div>
		</main>
	)
}