import styles from "@/app/page.module.css"

export default function Label(props){

    return (<div className={styles.Label} >
        {props.lColor}
    </div>)
}