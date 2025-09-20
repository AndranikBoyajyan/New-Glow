import { Link } from "react-router";
import cn from "classnames";
import Dialog from "../../shared/Dialog";
import styles from "./MapModal.module.css";

interface MapModalProps {
  open: boolean;
  onClose: () => void;
  address: string;
}

export const MapModal = ({ open, onClose, address }: MapModalProps) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <Dialog open={open} onClose={onClose} title="Open in Maps">
      <div className={cn(styles.linksWrapper, "poppins-light")}>
        <Link
          to={`https://www.google.com/maps?q=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Google Maps
        </Link>
        <Link
          to={`https://yandex.com/maps/?text=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Yandex Maps
        </Link>
        <Link
          to={`http://maps.apple.com/?q=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Apple Maps
        </Link>
      </div>
    </Dialog>
  );
};
