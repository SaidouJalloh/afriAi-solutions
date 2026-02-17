import Image from "next/image";
import styles from "@ui/logo/logo.module.scss";

export default function Logo() {
    return (
        <>
            <Image src="/logo.png" alt="AfriAi Solutions Logo" width={50} height={50} quality={75} />
            <h1 className={styles.logoText}>
                Afri<span className={styles.logoTextSpan}>AI</span> Solutions
            </h1>
        </>
    );
}
