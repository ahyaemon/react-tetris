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
            width: '100%',
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
