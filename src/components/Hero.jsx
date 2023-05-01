function Hero() {
    const handleClick = () => {
        alert("We will be opening shortly. See you soon!")
    }
    return (
        <>
        <h1 className="titleMain">Delicious and Healthy Food</h1>
        <p className="titleMain">Try our all-natural, organic, and locally sourced food.</p>
        <button onClick={handleClick}>Order Now</button>
        </>
    );
}

export default Hero;

// Path: src/components/Menu.jsx