// WelcomeMessage.js
const WelcomeMessage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '60px',
        left: '40px',
        textAlign: 'left',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        background: 'rgba(0, 0, 0, 0)',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ fontSize: '5em', fontWeight: 'bold', margin: 0 }}>
        Welcome,
      </h1>
      <p style={{ fontSize: '3em', margin: 0 }}>
        Let's Get Started
      </p>
    </div>
  );
};

export default WelcomeMessage;
