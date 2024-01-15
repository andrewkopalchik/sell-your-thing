// src/Cabinet.js
import React, { useState, useEffect } from 'react';

const Userpage = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    // Мокап для імітації отримання даних з сервера
    const fetchData = async () => {
      // Приклад даних користувача
      const mockUserData = {
        name: 'John Doe',
        email: 'john@example.com',
        // Додайте інші дані користувача за потребою
      };

      // Затримка для імітації запиту до сервера
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setUserData(mockUserData);
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
    setNewName(userData.name);
  };

  const handleSaveClick = () => {
    // Тут ви можете викликати API для оновлення ім'я користувача
    // Приклад:
    // updateUserData({ name: newName }).then(() => setEditMode(false));

    // Ми просто змінюємо стан для прикладу
    setUserData((prevData) => ({ ...prevData, name: newName }));
    setEditMode(false);
  };

  return (
    <div>
      <h2>Кабінет користувача</h2>
      {userData ? (
        <div>
          <p>Ім'я: {editMode ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> : userData.name}</p>
          <p>Email: {userData.email}</p>
          {editMode ? (
            <button onClick={handleSaveClick}>Зберегти</button>
          ) : (
            <button onClick={handleEditClick}>Редагувати</button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Userpage;
