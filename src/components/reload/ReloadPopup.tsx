/** @jsxImportSource @emotion/react */

import Popup from "reactjs-popup";
import {MdRefresh} from "react-icons/md";
import React from "react";
import {css} from "@emotion/react";
import {useGameHistory} from "../../hooks/useGameHistory";

export function ReloadPopup() {

  const { newGame, retry } = useGameHistory()

  return (
    <Popup trigger={
      <button
        type="button"
          css={css({
            padding: '10px',
            width: '100%',
            border: '1px solid grey',
            borderRadius: '4px',
            backgroundColor: '#eee',
            "-webkit-appearance": "none"
          })}
      >
        <MdRefresh size={'2em'}/>
      </button>
    } position="right center" modal>
      {/* @ts-ignore */}
      {(close: any) => (
        <div css={css({
          display: 'flex',
          flexDirection: 'column',
        })}>
          <button
            css={css({
              "-webkit-appearance": "none",
              border: '1px solid grey',
              borderRadius: '4px',
              backgroundColor: '#eee',
            })}
            onClick={() => {
              newGame()
              close()
            }}
          >
            <h1>新規プレイ</h1>
          </button>
          <button
            css={css({
              marginTop: '10px',
              "-webkit-appearance": "none",
              border: '1px solid grey',
              borderRadius: '4px',
              backgroundColor: '#eee',
            })}
            onClick={() => {
              retry()
              close()
            }}
          >
            <h2>
              再プレイ
            </h2>
            <p>出てくるミノの順番を変えずに初めからプレイ</p>
          </button>
        </div>
      )}
    </Popup>
  )
}
