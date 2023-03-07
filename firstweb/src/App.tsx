import React, { ChangeEvent, useEffect, useState } from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, Modal, TextField, DefaultButton } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
   root: {
      width: '960px',
      margin: '0 auto',
      textAlign: 'center',
      color: '#605e5c',
   },
};

export const App: React.FunctionComponent = () => {
   const [visibleLogin, setVisibleLogin] = useState<boolean>(false);
   const [idValue, setIdValue] = useState<string>();
   const [pwValue, setPwValue] = useState<string>();

   useEffect(() => {
      setVisibleLogin(true);
   }, []);

   const login = () => {
    
   }

   return (
      <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
         <Modal isOpen={visibleLogin} onDismiss={() => setVisibleLogin(false)}>
            <Stack horizontalAlign="center" verticalAlign="center">
               <Stack style={{ margin: '16px' }}>
                  <Text variant={'large'}>Login</Text>
               </Stack>
               <Stack tokens={{ childrenGap: 10 }} style={{ width: '70%' }}>
                  <Stack horizontal horizontalAlign="space-between">
                     <Stack>
                        <Text variant={'medium'}>ID :</Text>
                     </Stack>
                     <Stack>
                        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {setIdValue(event.target.value)}}/>
                     </Stack>
                  </Stack>
                  <Stack horizontal horizontalAlign="space-between">
                     <Stack>
                        <Text variant={'medium'}>PW :</Text>
                     </Stack>
                     <Stack>
                        <input type='password' onChange={(event: ChangeEvent<HTMLInputElement>) => {setPwValue(event.target.value)}}/>
                     </Stack>
                  </Stack>
                  <Stack horizontalAlign="center">
                     <DefaultButton text="login" style={{ width: '30px' }} onClick={() => login()}/>
                  </Stack>
               </Stack>
            </Stack>
            <Stack horizontal></Stack>
         </Modal>
      </Stack>
   );
};
