import { useState } from "react";
import ingredients from "./ingredients";
import IngredientList from "./IngredientList";
import SelectedIngredients from "./SelectedIngredients";

export default function PizzaBuilder() {
    const [selected, setSelected] = useState({});
    const [total, setTotal] = useState(0);

    const addIngredient = (item) => {
        setSelected((prev) => ({
            ...prev,
            [item.id]: {
                ...item,
                count: prev[item.id] ? prev[item.id].count + 1 : 1,
            },
        }));
        setTotal((t) => +(t + item.price).toFixed(2));
    };

    const removeIngredient = (item) => {
        if (!selected[item.id]) return;
        const newCount = selected[item.id].count - 1;
        if (newCount <= 0) {
            const updated = { ...selected };
            delete updated[item.id];
            setSelected(updated);
        } else {
            setSelected({
                ...selected,
                [item.id]: { ...item, count: newCount },
            });
        }
        setTotal((t) => +(t - item.price).toFixed(2));
    };

    const resetPizza = () => {
        setSelected([]);
        setTotal(0);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "40px" }}>
            <div style={{ flex: 1 }}>
                <h2>Your pizza:</h2>
                <SelectedIngredients selected={selected} />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h2>Your pizza: </h2>
                    <h2 style={{backgroundColor: "#ccc", padding: "4px", borderRadius: "8px"}}>{total.toFixed(2)}$</h2>
                    <button onClick={resetPizza} style={{width: "140px", height: "40px",
                         borderRadius: "11px", border: "none", backgroundColor: "yellow",
                          marginTop: "16px", fontSize: "17px", marginRight: "305px"}}>Reset pizza</button>
                </div>
                <IngredientList
                    ingredients={ingredients}
                    selected={selected}
                    onAdd={addIngredient}
                    onRemove={removeIngredient}
                />
            </div>
        </div>
    );
}