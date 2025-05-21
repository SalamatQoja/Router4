export default function SelectedIngredients({ selected }) {
    const items = Object.values(selected);
    return (
        <div style={{
            width: "700px", display: "flex",
            flexWrap: "wrap", gap: "30px"
        }}>
            {items.map((item) => (

                <img
                    key={item.id}
                    src={item.image}
                    alt={item.name}
                    className="img"
                />

            ))}
        </div>
    );
}