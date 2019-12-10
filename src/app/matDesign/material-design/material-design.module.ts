import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatExpansionModule
  ]
})
export class MaterialDesignModule { }
