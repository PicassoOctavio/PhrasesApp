import { memo } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Close } from "@mui/icons-material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { deletePhrase } from "../../store/phrasesSlice";

import "./Card.css";
import Swal from "sweetalert2";

interface CardProps {
  id: string;
  description: string;
}

export const Card = memo(({ id, description }: CardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);
  const theme = useTheme();

  const dispatch = useDispatch();

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Estas seguro?",
        text: "Estas a punto de eliminar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deletePhrase(id));
          swalWithBootstrapButtons.fire({
            title: "Eliminado",
            text: "La tarjeta fue eliminada.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "Tu frase aún existe",
            icon: "error",
          });
        }
      });
  };

  return (
    <motion.div
      className="card"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        backgroundColor: theme.palette.background.paper,
      }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
        zIndex: 2,
        backgroundColor: "white",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "black",
          width: 10,
          height: 10,
        }}
        onClick={handleDelete}
      >
        <Close
          sx={{
            width: 18,
            height: 18,
            "&:hover": {
              bgcolor: theme.palette.primary.light,
              color: theme.palette.text.secondary,
              borderRadius: "50%",
              padding: "5px",
            },
          }}
        />
      </IconButton>
      <Typography variant="h6" className="description">
        {description}
      </Typography>
    </motion.div>
  );
});
