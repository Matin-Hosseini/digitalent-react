const useLocalStorage = (key: string) => {
  const storedValue = window.localStorage.getItem(key);

  const value = storedValue ? JSON.parse(storedValue) : null;

  const setValue = (newValue: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeValue = () => {
    window.localStorage.removeItem(key);
  };

  return [ value, setValue, removeValue ];
};

export default useLocalStorage;
