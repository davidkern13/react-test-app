import styles from './style.module.css';

interface Props {
    handlePrevCount: () => void,
    handleNextCount: () => void,
    visible: boolean,
    hide: boolean,
    page: number,
}

export const PaginationComponent = (props: Props) => {

    const { handlePrevCount, handleNextCount, page, visible, hide } = props;

    return (
        <div>
            <button className={styles.paginationButton} onClick={handlePrevCount} disabled={visible}>
                Previous
            </button>
            <span>Page {page}</span>
            <button className={styles.paginationButton} onClick={handleNextCount} disabled={hide}>
                Next
            </button>
        </div>
    );
}

