
import { Item } from "../Item/Item";
import "./ItemList.css";

export function ItemList({ libros }) {
  return (
    <div className="lista-libros">
      {libros.map(libro => (
        <Item key={libro.id} {...libro} />
      ))}
    </div>
  );
}
