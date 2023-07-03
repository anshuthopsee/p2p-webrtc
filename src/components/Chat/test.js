const handleMessageRecieved = async (e) => {
    const { message } = e.detail;
  
    setChatMessages((prevState) => {
      if (message.file) {
        const current = prevState[message.index];

        if (message.file.complete) {
          current.remote.file.complete = true;
          console.log(prevState[message.index]);
          return [...prevState];
        };
  
        if (!current) {
          console.log('one time');
          const updatedState = [...prevState];
          updatedState[message.index] = { remote: message };
          return updatedState;
        }
  
        const file = { ...current.remote.file };
        file.chunk = [...file.chunk, ...message.file.chunk];
        const updatedCurrent = { ...current, remote: { ...current.remote, file } };
        const updatedState = [...prevState];
        updatedState[message.index] = updatedCurrent;
        return updatedState;
      }
  
      return prevState.concat({ remote: message });
    });
  };