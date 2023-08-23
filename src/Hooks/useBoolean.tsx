import { useState } from "react";

export default function useBoolean(init = false) {
  const [value, setValue] = useState<boolean>(init);

  const onTogggleValue = () => {
    setValue((prev) => !prev);
  };

  // as const 로 타입이 변하지 않을것이라는 것을 보장해준다 리터럴타입
  return [value, onTogggleValue, setValue] as const;
}
