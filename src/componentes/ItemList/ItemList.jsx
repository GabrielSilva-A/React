import { Item } from "../Item/Item";


export function ItemList({ libros }) {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
        {libros.map(libr => (
        <Item key={libr.id} {...libr} />
        ))}
        </div>
);
}