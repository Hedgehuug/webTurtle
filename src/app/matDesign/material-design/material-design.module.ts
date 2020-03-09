import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule
  } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class MaterialDesignModule { }
