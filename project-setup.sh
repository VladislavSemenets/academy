#!/bin/sh

echo "Install main dependencies"

yarn install

echo "Copy .env file"

cp .env.example .env
