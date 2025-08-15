import { Routes, Route } from "react-router";
import { PhrasesPage } from "../pages/PhrasesPage";
import { AddPhrasePage } from "../pages/AddPhrasePage/AddPhrasePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PhrasesPage />} />
      <Route path="/crear" element={<AddPhrasePage />} />

      <Route path="/*" element={<PhrasesPage />} />
    </Routes>
  );
};
