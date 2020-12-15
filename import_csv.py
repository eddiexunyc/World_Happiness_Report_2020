import os
import pandas as pd
import pymongo
import json
import glob
os.chdir("r:\Users\eddie\Data Science Project\Project2_Team3\data")

extension = "csv"
all_files = [i for i in glob.glob('*.{}'.format(extension))]
#combine all files in the list
combined_csv = pd.concat([pd.read_csv(f) for f in all_filenames ])
#export to csv
combined_csv.to_csv( "combined_csv.csv", index=False, encoding='utf-8-sig')

# def import_content(filepath):
#     mng_client = pymongo.MongoClient('localhost', 27017)
#     mng_db = mng_client['project_1'] # Replace mongo db name
#     collection_name = '2019' # Replace mongo db collection name
#     db_cm = mng_db[collection_name]
#     cdir = os.path.dirname(__file__)
#     file_res = os.path.join(cdir, filepath)

#     data = pd.read_csv(file_res)
#     data_json = json.loads(data.to_json(orient='records'))
#     db_cm.remove()
#     db_cm.insert(data_json)

# if __name__ == "__main__":
#   filepath = 'data/2019.csv'  # pass csv file path
#   import_content(filepath)