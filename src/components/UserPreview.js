function UserPreview({ user }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Дані користувача</h2>

      <p>
        Ім'я:
        {' '}
        {user.name || 'Поле не заповнене'}
      </p>

      <p>
        Email:
        {' '}
        {user.email || 'Поле не заповнене'}
      </p>

      <p>
        Вік:
        {' '}
        {user.age || 'Поле не заповнене'}
      </p>
    </div>
  );
}

export default UserPreview;