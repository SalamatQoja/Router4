import { useState } from "react";
import './PizzaCss.css';

export default function IngredientList({ ingredients, selected, onAdd, onRemove }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState("summary");
    const [showCoupon, setShowCoupon] = useState(false);
    const [savePizza, setSavePizza] = useState(false);
    const [loadPizza, setLoadPizza] = useState(false);

    const selectedItems = ingredients.filter(item => selected[item.id]?.count > 0);
    const totalPrice = selectedItems.reduce((total, item) => {
        return total + item.price * selected[item.id].count;
    }, 0);

    return (
        <div>
            {ingredients.map((item) => (
                <div key={item.id} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderBottom: "1px solid #ccc", padding: "8px", width: "390px", height: "70px",
                    borderRadius: "3px", border: "1px solid #ccc"
                }}>
                    <div style={{ width: "200px" }}>
                        <h2 style={{ margin: "18px 15px", fontSize: "22px" }}>{item.name}</h2>
                        <p style={{ marginTop: "-10px", marginLeft: "16px" }}>${item.price}</p>
                    </div>
                    <div style={{ width: "135px", display: "flex" }}>
                        <button onClick={() => onRemove(item)} style={{
                            padding: "7px 18px", backgroundColor: "red", borderRadius: "5px",
                            border: "none", color: "white", fontSize: "23px"
                        }}>-</button>
                        <span style={{ margin: "0 10px", fontSize: "22px", marginTop: "8px" }}>
                            {selected[item.id]?.count || 0}
                        </span>
                        <button onClick={() => onAdd(item)} style={{
                            padding: "7px 16px", backgroundColor: "green", borderRadius: "5px",
                            border: "none", color: "white", fontSize: "23px"
                        }}>+</button>
                    </div>
                </div>
            ))}

            <div style={{ height: "60px", border: "1px solid #ccc", borderRadius: "4px", width: "407px" }}>
                <h2 style={{ margin: "15px 21px", fontSize: "26px" }}>Total</h2>
                <h3 style={{ marginLeft: "330px", marginTop: "-45px", fontSize: "23px" }}>${totalPrice.toFixed(2)}</h3>
            </div>

            <div style={{
                height: "60px", display: "flex", justifyContent: "space-between", width: "407px",
                border: "1px solid #ccc", borderRadius: "4px"
            }}>
                <button onClick={() => setSavePizza(true)} className="save">Save Pizza</button>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="checkout"
                >Checkout</button>
            </div>

            <div style={{ height: "60px", border: "1px solid #ccc", width: "407px" }}>
                <button onClick={() => setLoadPizza(true)} style={{
                    width: "130px", height: "40px", borderRadius: "6px", border: "none",
                    margin: "10px 18px", fontSize: "18px", backgroundColor: "black", color: "white"
                }}>Load Pizza</button>
            </div>

            {savePizza && (
                <div tyle={{
                    color: "green", width: "440px", textAlign: "center", marginLeft: "-20px"
                }}>
                    <h3>Your pizza configuration has been saved. Your numbers is:</h3>
                    <ul>
                        {selectedItems.map((item) => (
                            <li key={item.code}>
                                <strong>{item.code}</strong>
                                -{item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {loadPizza && (
                <div style={{
                    width: "100%",
                    position: "fixed", backgroundColor: "rgba(0, 0, 0, 0.5)",
                    top: "0", right: "0", bottom: "0", top: "0"
                }}>
                    <div style={{
                        width: "400px", height: "120px", borderRadius: "8px",
                        backgroundColor: "white", margin: " 200px 540px"
                    }}>
                        <p className="load-par">Load pizza using a configuration number:</p>
                        <div style={{ marginTop: "40px", height: "10px" }}>
                            <input type="text" placeholder="-McOCXqrX4fwJZGHvrf" style={{
                                width: "250px",
                                marginLeft: "30px", padding: "6px", borderRadius: "3px"
                            }} />
                            <button type="submit" style={{
                                backgroundColor: "blue", color: "white",
                                borderRadius: "4px", border: "none", padding: "7px 12px", marginLeft: "7px"
                            }}>Submit</button>
                        </div>
                        <button onClick={() => setLoadPizza(false)} className="load-btn">x</button>
                    </div>

                </div>
            )}


            {isModalOpen && (
                <div>
                    <div style={{
                        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
                        alignItems: "center", justifyContent: "center", zIndex: 1000
                    }}>
                        <div style={{
                            backgroundColor: "white", padding: "20px", borderRadius: "10px",
                            width: "300px"
                        }}>
                            {step === "summary" ? (
                                <>
                                    <h2 style={{ textAlign: "center", fontSize: "29px" }}>Your Order</h2>
                                    <p style={{ fontSize: "17px", marginLeft: "6px" }}>The pizza has the following ingredients:</p>
                                    <ul style={{ marginLeft: "38px", marginTop: "25px" }}>
                                        {selectedItems.map(item => (
                                            <li key={item.id} style={{ fontSize: "18px" }}>
                                                {item.name}  {selected[item.id].count}

                                            </li>
                                        ))}
                                    </ul>
                                    <h3 style={{ textAlign: "center", fontSize: "25px" }}>Total price: ${totalPrice.toFixed(2)}</h3>
                                    <h3 style={{ textAlign: "center", marginTop: "-10px" }}>Continue to checkout?</h3>
                                    <div style={{
                                        display: "flex", justifyContent: "space-between", marginTop: "70px",
                                        width: "225px", marginLeft: "7px"
                                    }}>
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="save-btn1"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => setStep("form")}
                                            className="save-btn"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </>

                            ) : (
                                <div style={{
                                    width: "1300px", display: "flex", flexDirection: "column", flexWrap: "wrap",
                                    backgroundColor: "white", marginLeft: "-450px"
                                }}>
                                    <div style={{ marginLeft: "230px" }}>
                                        <h3 style={{ fontSize: "28px", marginLeft: "325px" }}>Ingredient info:</h3>
                                        <ul style={{
                                            marginLeft: "20px", width: "700px",
                                            display: "flex", flexDirection: "row", flexWrap: "wrap"
                                        }}>
                                            {selectedItems.map(item => (
                                                <li key={item.id} style={{ fontSize: "18px", margin: "10px 20px" }}>
                                                    {item.name} {selected[item.id].count}
                                                    <img src={item.image} alt={item.name} width={30} />
                                                </li>

                                            ))}
                                        </ul>
                                        <h4 style={{ fontSize: "20px" }}>Total price: ${totalPrice.toFixed(2)}</h4>
                                    </div>
                                    <form style={{
                                        display: "flex", flexDirection: "column", gap: "25px",
                                        marginLeft: "230px"
                                    }}>
                                        <h2 style={{ marginLeft: "320px", fontSize: "29px" }}>Checkout Info:</h2>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <label style={{ width: "90px", fontSize: "20px" }}>Name</label><input type="text" style={{
                                                padding: "8px",
                                                borderRadius: "4px", width: "580px", marginLeft: "7px"
                                            }} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <label style={{ fontSize: "20px" }}>Email</label><input type="email" style={{
                                                padding: "8px",
                                                borderRadius: "4px", width: "580px", marginLeft: "50px"
                                            }} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <label style={{ fontSize: "20px" }}>Choose delivery method:</label>
                                            <select style={{ padding: "8px", width: "455px", borderRadius: "4px", marginLeft: "40px" }}>
                                                <option> Local pickup</option>
                                                <option>Delivery</option>
                                            </select>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <label style={{ fontSize: "20px" }}>Aditional notes</label><textarea style={{
                                                padding: "8px",
                                                marginLeft: "37px", width: "520px", borderRadius: "4px"
                                            }} />
                                        </div>
                                        <div style={{ display: "flex", marginLeft: "-23px", flexDirection: "row", width: "380px", justifyContent: "space-evenly" }}>
                                            <label style={{ fontSize: "18px" }}>Are you a regular client?</label>
                                            <label><input type="radio" name="regular" value="yes" /> Yes</label>
                                            <label style={{ marginLeft: "15px" }}><input type="radio" name="regular" value="no" /> No</label>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <label style={{ fontSize: "18px" }}> Do you have a coupon code</label>
                                            <input type="checkbox" onChange={(e) => setShowCoupon(e.target.checked)} />
                                        </div>

                                        {showCoupon && (
                                            <input placeholder="Coupon code" style={{
                                                padding: "8px", width: "416px",
                                                borderRadius: "4px",
                                                backgroundColor: "#ccc", border: "none"
                                            }} />
                                        )}

                                        <div className="showcoupon"><button type="reset" className="reset-btn">Reset</button>
                                            <button onClick={() => setShowCoupon(true)} type="submit" className="submit-btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
