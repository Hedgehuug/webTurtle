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
    MatSelectModule} from '@angular/material';



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
    MatSelectModule
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
    MatSelectModule
  ]
})
export class MaterialDesignModule { }
